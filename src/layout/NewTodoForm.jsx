import axios from "axios";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import table from "../media/table-crowd.jpg";

import "../css/home.css";
import "../css/about.css";
import "../css/menu.css";
import "../css/booking.css";
import "../css/contact.css";
import "../css/Todo.css";

export default function NewTodoForm() {
  const [input, setInput] = useState({
    dueDate: new Date().toISOString().split("T")[0],
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const output = { ...input, dueDate: new Date(input.dueDate) };
      const token = localStorage.getItem("token");
      const rs = await axios.post("http://localhost:8889/Reservation", output, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Create new OK");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <img src={table} alt="err" width={"100%"} height={"100%"} />
      <div className="flex Bontent1">
        <div className="Bcontact">
          <div className="flex Bontent2">
            <div>
              <Fade triggerOnce>
                {" "}
                <div className="flex">
                  <p className="Adash">___________</p>
                  <p className="Adash mx-2">Food land</p>
                  <p className="Adash">___________</p>
                </div>
              </Fade>
            </div>
          </div>

          <Fade triggerOnce>
            {" "}
            <p className="book-head">MAKE YOUR RESERVATION</p>
          </Fade>
          <Fade triggerOnce delay={200}>
            {" "}
            <div className="Bmt">
              <div className="flex">
                <form className="Tform-container" onSubmit={hdlSubmit}>
                  <div className="form-control w-full max-w-[220px]">
                    <div className="label">
                      <span className="label-text text-white">Due Date</span>
                    </div>
                    <input
                      className="Tp"
                      type="date"
                      name="dueDate"
                      value={input.dueDate.split("T")[0]}
                      onChange={(e) =>
                        hdlChange({
                          target: {
                            name: "dueDate",
                            value:
                              e.target.value +
                              "T" +
                              input.dueDate.split("T")[1],
                          },
                        })
                      }
                    />
                  </div>
                  <div className="flex Bontent1 Bmt1 Bmt2">
                    <button className="Bbook-btn">BOOK A TABLE</button>
                  </div>
                </form>
              </div>
              <br />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
