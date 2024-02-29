import axios from "axios";
import React from "react";

export default function TodoCard(props) {
  const { el, openModal, setTrigger } = props;

  const statusColor =
    el.status === "vip"
      ? "bg-pink-300"
      : el.status === "medium"
      ? "bg-blue-300"
      : "bg-lime-300";

  const hdlDelete = async (e) => {
    try {
      e.stopPropagation();
      const token = localStorage.getItem("token");
      let rs = await axios.delete(
        `http://localhost:8889/Reservation/${el.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Delete successful");
      setTrigger((prv) => !prv);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`card w-5/6 ${statusColor} shadow-xl mx-auto cursor-pointer
      active:shadow-none active:translate-x-2 active:translate-y-1`}
      onClick={() => openModal(el.id)}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{el.title}</h2>
          <div className="badge badge-secondary" onClick={hdlDelete}>
            delete
          </div>
        </div>
        <div className="flex">
          <p>Due-date : {new Date(el.dueDate).toDateString()}</p>
          <p className="text-right">Status : {el.status}</p>
        </div>
      </div>
    </div>
  );
}
