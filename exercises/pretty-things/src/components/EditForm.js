import React from 'react'

const EditForm = (props) => {
    const { title, description, imgUrl, handleChange, handleEditSubmit } = props
    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <input 
                    type="text"
                    value={title}
                    name="title"
                    onChange={handleChange}
                    placeholder="New Title"
                    />
                <input 
                    type="text"
                    value={description}
                    name="description"
                    onChange={handleChange}
                    placeholder="New Description"
                    />
                <input 
                    type="text"
                    value={imgUrl}
                    name="imgUrl"
                    onChange={handleChange}
                    placeholder="New Image Url"
                    />
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditForm