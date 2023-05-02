import React from 'react'
import { DocSectionText } from '../../common/docsectiontext'

export const Wireframe = (props) => {
    return (
        <>
            <DocSectionText {...props} />
            <div>
                <img className="w-full" src="/images/pt/panel.jpg" alt='panel' />
            </div>
        </>
    )
}