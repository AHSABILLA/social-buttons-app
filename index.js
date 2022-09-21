const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <button className={className}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button className="button button1" text="Like" />
      <Button className="button button2" text="Comment" />
      <Button className="button button3" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
