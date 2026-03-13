const RenderCond = ({ x, y }) => {
  return (
    <div>
      {x > 5 && <p>X é maior que 5</p>}
      <p>O valor de y é: {y}</p>
      {x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}
    </div>
  );
};

export default RenderCond;
