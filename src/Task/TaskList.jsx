function TaskList({tasks , onEdit , onDelete}) {
    return ( 
        <>
        <div class="overflow-auto">
              <table class="table-fixed overflow-auto xl:w-full">
                <thead>
                  <tr>
                    <th class="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th class="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                      {" "}
                      Title{" "}
                    </th>
                    <th class="p-4 pb-8 text-sm font-semibold capitalize w-full">
                      {" "}
                      Description{" "}
                    </th>
                    <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                      {" "}
                      Tags{" "}
                    </th>
                    <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Priority{" "}
                    </th>
                    <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Options{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    tasks.map((t) => {
                        return (
                          <tr class="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-star"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="yellow"
                        fill={t.isFev ? "yellow" :  "gray"}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                      </svg>
                    </td>
                    <td>{t.title}</td>
                    <td>
                      <div>
                        {t.description}
                      </div>
                    </td>
                    <td>
                      <ul class="flex justify-center gap-1.5 flex-wrap">
                        
                        {t.tags.map((tag) => {
                          return (<li>
                          <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#1C92FFB0] px-2.5 text-sm capitalize text-[#F4F5F6]">
                            {tag}
                          </span>
                        </li>)
                        })}
                      </ul>
                    </td>
                    <td class="text-center">{t.priority}</td>
                    <td>
                      <div class="flex items-center justify-center space-x-3">
                        <button class="text-red-500" onClick={(e) => {e.preventDefault ;onDelete(t)}}>Delete</button>
                        <button class="text-blue-500" onClick={(e) => {e.preventDefault ;onEdit(t)}}>Edit</button>
                      </div>
                    </td>
                  </tr>
                        )
                    },[])
                  }


                </tbody>
              </table>
            </div>
        </>
     );
}

export default TaskList;