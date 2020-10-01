import { Component, State, ComponentInterface, h, Prop, Listen } from '@stencil/core'
import { imagine } from '../../generator/generator'

@Component({
    tag: 'game-token',
    styleUrl: 'game-token.scss'
})
export class Token implements ComponentInterface {

    @Prop() public source: string = 'genre'
    @State() private value: string = ''

    componentWillLoad() {
        this.generate()
    }

    private generate() {
        this.value = imagine(this.source)
    }

    @Listen('click')
    private handleClick() {
        this.generate()
    }

    public render() {
        const { value } = this
        return (
            <span>{value}</span>
        )
    }
}