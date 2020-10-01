import type { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
    globalStyle: 'src/global/index.scss',
    plugins: [
        sass()
    ]
}