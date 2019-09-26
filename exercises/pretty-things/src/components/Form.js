import React from'react'

const Form = (props) => {
    const { title, description, imgUrl, handleChange, handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={title}
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input 
                    type="text"
                    value={description}
                    name="description"
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input 
                    type="text"
                    value={imgUrl}
                    name="imgUrl"
                    onChange={handleChange}
                    placeholder="Image Url"
                />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form