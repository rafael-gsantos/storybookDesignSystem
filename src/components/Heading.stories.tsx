import { Meta, StoryObj }  from '@storybook/react'
import { Heading, HeadingProps } from './Heading'


export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    size: 'h2',
  },
  argTypes: {
    size:{
        options: [ 'h1' , 'h2' , 'h3' , 'h4' , 'h5' , 'h6'],
        control: {
            type: 'inline-radio',
        }
    }
  }
  
} as Meta<HeadingProps>


export const H1: StoryObj<HeadingProps> = {
    args:{
        size: 'h1'
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

export const H2: StoryObj<HeadingProps> = {
    args:{
        size: 'h2',
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

export const H3: StoryObj<HeadingProps> = {
    args:{
        size: 'h3',
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

export const H4: StoryObj<HeadingProps> = {
    args: {
        size: 'h4'
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

export const H5: StoryObj<HeadingProps> = {
    args: {
        size: 'h5',
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

export const H6: StoryObj<HeadingProps> = {
    args: {
        size: 'h6',
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

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: false,
        children: (
            <h2>Custom Example</h2>
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
