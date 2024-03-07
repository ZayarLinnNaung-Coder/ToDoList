import React, { useRef, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { Category, AllCategory } from "../components/categoryfeild/Category";
import { CategoryIcon, addMore } from "../components/img";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AddTaskButton } from "../components/btn/Button";
import { Link } from "react-router-dom";
import { tasks } from "../components/demo";
import Task from "../components/taskFeild/Task";

const Home = () => {
    const sliderRef = useRef(null);
    const [filterTasks, setFilteredTasks] = useState(tasks);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 200;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 200;
        }
    };

    const handleScroll = (event) => {
        if (sliderRef.current) {
            const delta = Math.max(
                -1,
                Math.min(
                    1,
                    event.nativeEvent.wheelDelta || -event.nativeEvent.detail
                )
            );
            sliderRef.current.scrollLeft -= delta * 150;
        }
    };

    const categoryHandler = (id) => {
        const filteredTasks = tasks.filter((task) => task.categoryFK === id);
        setFilteredTasks(filteredTasks);
        setSelectedCategory(id);
    };

    const clearFilter = () => {
        setFilteredTasks(tasks);
        setSelectedCategory(null);
    };

    return (
        <div className=" bg-slate-200 shadow-lg p-10 rounded-2xl">
            <div className="icon-nav flex justify-between mb-8">
                <div className="menu-icon">
                    <CgMenuLeft className="size-6" />
                </div>

                <div className="flex space-x-5">
                    <RiSearchLine className="size-6" />
                    <IoNotificationsOutline className="size-6" />
                </div>
            </div>
            <div className="header mb-5">
                <h2 className="text-3xl font-semibold mb-3">
                    Hey there, Vally
                </h2>
                <p className="text-slate-500 font-medium text-base">
                    Organize your plans for the day
                </p>
            </div>
            <div className="category-container mb-3">
                <div className="title font-semibold mb-5 flex justify-between items-center">
                    <div className="text-xl">Categories</div>
                    <Link className="text-sm" to="/category">
                        <img
                            className="size-7 bg-slate-400 p-2 rounded-full"
                            src={addMore.Plus2.icon}
                            alt="this is icon"
                        />
                    </Link>
                </div>
                <div className="flex items-center">
                    <MdChevronLeft
                        className="opacity-50 cursor-pointer hover:opacity-100 size-28"
                        onClick={slideLeft}
                    />
                    <div
                        className="category-scroll-container overflow-x-scroll scroll-smooth scroll scrollbar-hide"
                        ref={sliderRef}
                        onWheel={handleScroll}
                    >
                        <div className="category-wrap flex space-x-5 items-start">
                            <button onClick={clearFilter}>
                                <AllCategory />
                            </button>
                            {CategoryIcon.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => categoryHandler(category.id)}
                                >
                                    <Category
                                        img={category.icon}
                                        title={category.title}
                                    />
                                </button>
                            ))}
                            {/* <Link to="/category">
                                <AddCategory />
                            </Link> */}
                        </div>
                    </div>
                    <MdChevronRight
                        className="opacity-50 cursor-pointer hover:opacity-100 size-28"
                        onClick={slideRight}
                    />
                </div>
            </div>

            <div className="task-container mb-5">
                <div className="task-header flex justify-between items-center mb-5">
                    <div className="title text-xl font-semibold ">
                        Today's Tasks
                    </div>
                    {selectedCategory != null && (
                        <button onClick={clearFilter}>Clear Filter</button>
                    )}
                </div>
                <div className="task-container ">
                    <div className="task-scroll-container overflow-y-scroll max-h-[320px]  scroll-smooth scroll scrollbar-hide ">
                        {selectedCategory && filterTasks.length === 0 && (
                            <p>No tasks available for this category</p>
                        )}
                        <div className="task-wrap space-y-5 ">
                            {filterTasks.map((task, index) => (
                                <Task
                                    key={index}
                                    taskName={task.taskName}
                                    time={task.time}
                                    categoryFK={task.categoryFK}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <AddTaskButton />
            </div>
        </div>
    );
};

export default Home;
