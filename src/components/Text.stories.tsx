import { Meta, StoryObj }  from '@storybook/react'
import { Text, TextProps } from './Text'


export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
  },
  argTypes: {
    size:{
        options: [ 'xs' , 'sm' , 'md' , 'lg' , 'xl' ],
        control: {
            type: 'inline-radio',
        }
    }
  }
  
} as Meta<TextProps>


export const XSmall: StoryObj<TextProps> = {
    args: {
        size: 'xs',
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}

export const Medium: StoryObj<TextProps> = {
    args: {
        size:'md',
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}

export const Large: StoryObj<TextProps> = {
    args:{
        size: 'lg',
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}

export const XLarge: StoryObj<TextProps> = {
    args:{
        size: 'xl',
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: false,
        children: (
            <p>Custom Example</p>
        )
    }, 
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}
