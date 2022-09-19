import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AddCustomer(props) {
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');

    const [show, setShow] = useState(false);

    const handleClose_delete = () => {
        setShow(false);
        setName("");
        setIndustry("");
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
  return (
    <>
        <button onClick={handleShow} className="block mx-auto m-2 bg-white hover:bg-gray-200 text-black py-2 px-4 rounded  border border-gray-600  focus:outline-none focus:shadow-outline">
            + Add Customer
        </button>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        setName("");
                        setIndustry("");
                        props.newCustomer(name, industry);
                    }}
                    id="editModal"
                    className="w-full max-w-sm"
                >
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            for="name">
                            Customer Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="name"
                            type="text"
                            value={name}
                            placeholder="Skyler Kailer"
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                        />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            for="industry">
                            Industry
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="industry"
                            type="text"
                            value={industry}
                            placeholder="Taco"
                            onChange={(e)=>{setIndustry(e.target.value)}} />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
            
            <button
                onClick={
                    handleClose_delete
                }
                className="bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Close
            </button>
            <button
                form="editModal"
                onClick={handleClose}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add
            </button>
            </Modal.Footer>
        </Modal>
    </>
  );
}