import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AddTaskButton } from "../components/btn/Button";
import { Link } from "react-router-dom";
import { repeatTime, times } from "../components/demo";

const AddTask = () => {
    const currentDate = new Date();
    const myanmarTime = new Date(currentDate.getTime() + 6.5 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

    console.log(myanmarTime);

    return (
        <div className="bg-slate-200 p-10 shadow-lg rounded-2xl">
            <div className="back-icon mb-5">
                <Link to="/">
                    <FaArrowLeftLong className="size-6" />
                </Link>
            </div>
            <div className="header ">
                <h2 className="text-3xl font-semibold mb-3">Add Task</h2>
            </div>
            <div className="category-form mb-8">
                <form action="">
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="name"
                        >
                            Label
                        </label>
                        <input
                            className="w-full block bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg placeholder:text-gray-900"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Create Task"
                            autoComplete="off"
                        />
                    </div>
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="name"
                        >
                            Date
                        </label>
                        <input
                            className="w-full block bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg placeholder:text-gray-900"
                            type="date"
                            name="name"
                            id="name"
                            placeholder="Create Task"
                            autoComplete="off"
                            min={myanmarTime}
                            defaultValue={myanmarTime}
                        />
                    </div>
                    <div className="time flex space-x-4 mb-5">
                        <div className="input-group flex-1">
                            <label
                                className="block font-semibold mb-3 text-lg"
                                htmlFor="name"
                            >
                                Start
                            </label>

                            <select
                                className="w-full bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg block"
                                name="startTime"
                                id="time1"
                            >
                                {times.map((time, index) => (
                                    <option key={index} value={time.value}>
                                        {time.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group flex-1">
                            <label
                                className="block font-semibold mb-3 text-lg"
                                htmlFor="name"
                            >
                                End
                            </label>

                            <select
                                className="w-full bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg block"
                                name="endTime"
                                id="time2"
                            >
                                {times.map((time, index) => (
                                    <option key={index} value={time.value}>
                                        {time.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="input-group mb-5">
                        <label
                            className="block font-semibold mb-3 text-lg"
                            htmlFor="name"
                        >
                            Repeat
                        </label>

                        <select
                            className="w-full bg-slate-400 focus:outline-none py-3.5 px-5 rounded-lg block"
                            name="startTime"
                            id="time1"
                        >
                            {repeatTime.map((time, index) => (
                                <option key={index} value={time.id}>
                                    {time.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="">
                        <AddTaskButton />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
