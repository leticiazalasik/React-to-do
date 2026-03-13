import { useEffect, useState } from "react";

const Hooks = () => {
  let idade = 30;
  const [novaIdade, setNovaIdade] = useState();

  const changeAge = () => {
    idade = 31;
    console.log(idade);
  };

  const changeNewAge = () => {
    setNovaIdade(45);
  };

  useEffect(() => {
    console.log("Testando!");
  });

  return (
    <div>
      <p>Idade: {novaIdade}</p>
      <button onClick={changeNewAge}>Mudar nova idade</button>
    </div>
  );
};

export default Hooks;
