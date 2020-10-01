import patternData from '../data/patterns.json'
import data from '../data/data.json'

const patternTokens: { [key: string]: string[] } = {
    'adjective': data.adjectives,
    'genre': data.genres,
    'theme': data.themes,
    'style': data.styles
}

function choose<T>(source: T[]): T {
    const v = Math.floor(Math.random() * source.length)
    return source[v]
}

export interface Part {
    type: string
    value: string
}

export function imagine(source: string): string {
    const tokens = patternTokens[source]
    const value = choose(tokens)
    return value
}

export function generate(): Part[] {
    const pattern = choose(patternData.patterns)
    
    return pattern.split(' ').reduce<Part[]>((items, token) => {
        const match = token.match(/^{(.+?)}$/)
        console.log('MATCH', token, match)
        const item: Part = match && match.length > 1
            ? { type: 'token', value: match[1] }
            : { type: 'text', value: token }
        items.push(item)
        return items
    }, [])
}