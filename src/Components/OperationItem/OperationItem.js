import React from "react";

export default function OperationItem({ operations, deleteItem }) {
  console.log(operations)
  return (
      <ul>
        {operations.map((operation) => (
          <li className="flex flex-row flex-wrap rounded-[25px] shadow-lg mb-5 p-5 min-h-fit text-secondaryTextColor border-2 border-border bg-itemLayout " key={operation.id}>
            <div className=" container flex justify-between items-center">
              <p className="text-lg font-medium">{operation.category}</p>

              <div className="flex items-center">
                <p>{operation.amount}$</p>

                <button
                  className="ml-2 cursor-pointer"
                  onClick={() => deleteItem(operation.id)}
                >
                  X
                </button>
              </div>

            </div>
            {!!operation.comment && (
              <p className="overflow-y-hidden text-xs text-[#c4c5c9] max-w-[70%]">{operation.comment}</p>
            )}
          </li>
        ))}
      </ul>
  );
}

