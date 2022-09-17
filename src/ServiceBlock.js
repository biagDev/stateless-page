function ServiceBlock(props) {
  return (
    <div className='service-block'>
      <img src={props.block.imgURL} alt={props.block.text} />
      <p>{props.block.text}</p>
    </div>
  );
}

export default ServiceBlock;
