import React from "react";
const Teachers = (item) => {
  return (
    <section className="flex w-full">
      <aside className="p-4 w-full overview__activity__mentors rounded-md	mb-6 ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            {item.item.img}
            <div>
              <h1 className="font-semibold">{item.item.teacherName}</h1>
              <h1 style={{ color: "rgb(84, 87, 122)" }}>
                {item.item.lectureNAME}
              </h1>
            </div>
          </div>
          {item.item.type == "follow" ? (
            <div
              className="flex items-center cursor-pointer"
              style={{ color: "#546FFF" }}
            >
              {item.item.addIcon}
              <h6 >{item.item.follow}</h6>
            </div>
          ) : (
            <h1
              className="items-center flex justify-center"
              style={{ color: "rgb(84, 87, 122)" }}
            >
              Followed
            </h1>
          )}
        </div>
        <div className="flex mt-6 justify-between items-center mb-2">
          <div className="flex gap-2 items-center">
            {item.item.taskIcon}
            <h1 className="font-semibold">{item.item.task}</h1>
          </div>
          <div className="flex gap-2 items-center">
            {item.item.starIcon}
            <h1 className="font-semibold">{item.item.reviews}</h1>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Teachers;
