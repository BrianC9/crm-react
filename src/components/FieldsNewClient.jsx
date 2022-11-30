const FieldsNewClient = ({client}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="name"
                >Name:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client`s name"
                    name="name"
                    defaultValue={client?.name}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="company"
                >Company:</label>
                <input 
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client`s company"
                    name="company"
                    defaultValue={client?.company}

                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="name@email.com"
                    name="email"
                    defaultValue={client?.email}

                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="telephone"
                >Telephone:</label>
                <input 
                    id="telephone"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client`s telephone"
                    name="telephone"
                    defaultValue={client?.telephone}

                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="notes"
                >Notes:</label>
                <textarea
                    as="textarea"
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Client`s notes"
                    name="notes"
                    defaultValue={client?.notes}

                />
            </div>
        </>
    )
}

export default FieldsNewClient