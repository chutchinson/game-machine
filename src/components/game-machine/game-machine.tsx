import { Component, Host, h, State } from '@stencil/core'
import { generate, Part } from '../../generator/generator'

@Component({
    tag: 'game-machine',
    styleUrl: 'game-machine.scss'
})
export class GameMachine {
    
    @State() private help = ''
    @State() private tokens: Part[] = []

    public componentWillLoad() {
        this.tokens = generate()
    }

    public render() {
        const components = this.tokens.map((token) => {
            return token.type === 'token' 
                ? <game-token source={token.value} 
                    onMouseOver={this.handleMouseOverToken(token)}
                    onMouseLeave={this.handleMouseLeaveToken} />
                : <span class="text">{token.value}</span>
        })
        return (
            <Host>
                <header>
                    game machine
                </header>
                <div class="content">
                    { components }
                </div>
                <div class="help">
                    { this.help }
                </div>
            </Host>
        )
    }

    private handleMouseOverToken = (token: Part) => {
        return () => {
            this.help = token.value
        }
    }

    private handleMouseLeaveToken = () => {
        this.help = ''
    }
}