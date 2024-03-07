import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoClose } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

const Task = ({ taskName, time, categoryFK }) => {
    const [isChecked, setIsChecked] = useState(false);
    const uniqueId = uuidv4();

    const editTaskHandler = (categoryFK) => {
        console.log("this is edit" + categoryFK);
    };

    const deleteTaskHandler = (categoryFK) => {
        console.log("this is delete" + categoryFK);
    };

    return (
        <div className="bg-slate-300 rounded-lg px-8 py-5 flex justify-between">
            <div className="flex items-center space-x-5 ">
                <input
                    className="h-6 w-6 accent-violet-500 rounded "
                    type="checkbox"
                    name="task"
                    id={uniqueId}
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <div className="task-text">
                    <label
                        className={`font-semibold text-xl ${
                            isChecked ? "line-through" : ""
                        } `}
                        htmlFor={uniqueId}
                    >
                        {taskName}
                    </label>
                    <p className="text-base" htmlFor={time}>
                        {time}{" "}
                    </p>
                </div>
                <input type="hidden" name="categoryFK" value={categoryFK} />
            </div>
            <div className="icons flex items-center space-x-3">
                <button
                    type="button"
                    onClick={() => editTaskHandler(categoryFK)}
                >
                    <FaRegEdit className="size-5 text-blue-500" />
                </button>

                <button
                    type="button"
                    onClick={() => deleteTaskHandler(categoryFK)}
                >
                    <IoClose className="size-5 text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default Task;
