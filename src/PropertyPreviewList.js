import React from "react";

export default function PropertyPreviewList({properties}) {
    return (
        properties.map((property, index) => <div key={index} style={{
            border: 'solid black',
            marginTop: 20,
            marginBottom: 20
        }}>{JSON.stringify(property)}</div>)
    )
}
