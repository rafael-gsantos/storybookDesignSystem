import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'


export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar de mim por 30dias</Text>
                </div>
            )
        }
    ],

} as Meta<CheckboxProps>


export const Default: StoryObj<CheckboxProps> = {}


//to able click in text to check the checkbox put a id value in from label in the checkbox tag
