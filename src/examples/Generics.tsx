import React, { useState } from 'react'

interface Props {
    name: string
}

const HelloWorld:React.FC<Props> = ({name}) => {

    const [state, setState] = useState<{ fullName:string | null }>({ fullName:'Bob' })

    state.fullName

    return <div>hello {name}</div>
}

interface FormProps<T>{
    values: T,
    children: (value: T) => JSX.Element
}

const Form = <T extends {}>({children, values}: FormProps<T>) => {

    return(
        children(values)
    )
}

const Generics: React.FC = () => {
    return(
        <div>
            <Form values={{firstName: 'Bob'}}>
                {(values) => 
                    <div>
                        {values.firstName}        
                    </div>
                }
            </Form>
        </div>
    )
}

export default Generics;

