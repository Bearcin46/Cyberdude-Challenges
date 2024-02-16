import { ChangeEvent, FormEvent, useState } from "react";

const Todo = () => {
  const [listItems, setListItems] = useState<string>("");
  const [inputlist, setInputList] = useState<string[]>([]);
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setListItems(() => event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(listItems);
    if (listItems && listItems !== "") {
      setInputList((prev: string[]) => [...(prev || []), listItems]);
      setListItems("");
    }
  };

  const handleDelete = (index: number) => {
    const newList = [...inputlist];
    newList.splice(index, 1);
    setInputList(newList);
  };

  const itemsIncoming = inputlist.map((todos, index) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between bg-blue-100 px-3 rounded-lg py-2"
      >
        <p className="">{todos}</p>

        <div className="flex gap-3">
          {/* edit */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            className="text-blue-600 hover:text-green-700 cursor-pointer"
          >
            <path
              fill="currentColor"
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"
            ></path>
          </svg>

          {/* delete */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            className="text-blue-600 hover:text-red-600 cursor-pointer"
            onClick={() => handleDelete(index)}
          >
            <path
              fill="currentColor"
              d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z"
            ></path>
          </svg>
        </div>
      </div>
    );
  });

  return (
    <div className="sm:mt-20">
      <div className="flex gap-1 items-center justify-center bg-blue-600 *:text-white px-3 py-2">
        <h1 className="texl-2xl font-bold">To-Do List </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h7v-2H5V10zm0-4h14v2H5V6zm17.84 10.28l-.71.71l-2.12-2.12l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41zm-3.54-.7l2.12 2.12l-5.3 5.3H14v-2.12l5.3-5.3z"
          ></path>
        </svg>
      </div>
      {/* ===============input========================= */}

      <div className="mt-4 px-4">
        <form action="" className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            value={listItems}
            onChange={handleOnChange}
            placeholder="Enter your bucket List"
            className="bg-blue-50 placeholder-blue-900 focus:outline-none w-full px-5 rounded-tl-md rounded-bl-md "
          />
          <button className="px-6 rounded-tr-md rounded-br-md py-2 bg-blue-600 text-stone-50">
            Add
          </button>
        </form>
      </div>

      {/* =======================list=================== */}
      <div className="flex flex-col gap-4 mt-4 px-4 ">{itemsIncoming}</div>
    </div>
  );
};

export default Todo;
