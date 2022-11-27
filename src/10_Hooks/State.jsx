// Để sử dụng state trong function component ta sẽ import hàm useState từ react

import React, { useState } from "react";
/**
 * Lưu ý:
 * - useState chỉ có thể được sử dụng bên trong function component
 * - Ta nên khai báo useState ở trên đầu của component
 * - Không được khai báo useState bên trong các block if() {}, for() {},...
 */

const State = () => {
  // useState nhận vào 1 tham số là giá trị khởi tạo của state
  // useState trả về 1 array gồm 2 phần tử
  // - Phần tử thứ nhất: Giá trị của state
  // - Phần tử thứ hai: Hàm dùng để thay đổi giá trị của state
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    // để thay đổi giá trị của statr count ta dùng hàm setCount
    setCount(count + 1);
  };

  // Để tạo nhiều giá trị state ta chỉ cần gọi hàm useState nhiều lần
  const [message, setMessage] = useState("");
  const handleGetMessage = () => {
    const messagess = prompt("Input your message:"); // biến messagess này và biến message trong [] khác nhau
    // Để thay đổi giá trị của state message, ta dùng hàm setMessage
    setMessage(messagess);
  };

  // State là một array
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("Input your color:");
    // Để thay đổi giá trị của state là array, ta cần tạo ra và thay đổi trên một array mới

    // Cách 1:
    // const newColors = [...colors, color];
    // setColors(newColors);

    // Cách 2:
    // setColors([...colors, color]);

    // Cách 3: Hàm setColors nhận vào một callback có tham số là giá trị hiện tại của state colors và return về giá trị state colors mới
    setColors((colors) => [...colors, color]);
  };
  const handleRemoveColor = () => {
    const color = prompt("Input your color:");

    // Cách 1:
    // const newColors = colors.filter((item) => item !== color);
    // setColors(newColors);

    // Cách 2:
    setColors((colors) => colors.filter((item) => item !== color));
  };
  // state là một object
  const [user, setUser] = useState({ username: "", email: "" });
  const handlechange = (evt) => {
    const { name, value } = evt.target;
    // setUser({...user,[name]:value} )
    setUser((user)=>({...user,[name]:value}))
  };

  return (
    <div className="mt-3">
      <h1> state</h1>
      <p>Count:{count}</p>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <br />
      <br />

      <p>Message: {message}</p>
      <button onClick={handleGetMessage}>Get Message</button>

      <br />
      <br />

      <p>Colors: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add color</button>
      <button onClick={handleRemoveColor}>Remove color</button>
      <br />
      <br />

      <p>
        User: {user.username} - {user.email}{" "}
      </p>
      <input
        placeholder="Username"
        value={user.username}
        type="text"
        name="username"
        onChange={handlechange}
        id=""
      />
      <input
        placeholder="Email"
        value={user.email}
        type="text"
        name="email"
        onChange={handlechange}
        id=""
      />
    </div>
  );
};

export default State;
