import React from "react";
import { addMore } from "../img";
import { Link, useNavigate } from "react-router-dom";

export const AddTaskButton = () => {
    return (
        <div>
            <button
                type="submit"
                className="flex items-center justify-center w-full bg-violet-500 text-white py-5 rounded-lg"
            >
                <img
                    className="size-5 me-3"
                    src={addMore.Plus2.icon}
                    alt="This is icon"
                />{" "}
                Add Task
            </button>
        </div>
    );
};

export const AddCategoryButton = () => {
    return (
        <div>
            <button
                type="submit"
                className="flex items-center justify-center w-full bg-violet-500 text-white py-5 rounded-lg"
            >
                <img
                    className="size-5 me-3"
                    src={addMore.Plus2.icon}
                    alt="This is icon"
                />{" "}
                Add Category
            </button>
        </div>
    );
};
