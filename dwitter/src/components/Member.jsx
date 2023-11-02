
export default function Member(){
  return (
    <div className="member">
      <fieldset>
        <legend>Login</legend>
          <form action="">
            <input name="id" id="id" type="text" placeholder="id"/>
            <input name="password" id="password" type="password" placeholder="password"/>
            <button>Login</button>
          </form>
      </fieldset>
      <fieldset>
        <legend>Sign Up</legend>
        <form action="">
          <input name="name" id="name" type="text" placeholder="name"/>
          <input name="id" id="id" type="text" placeholder="id"/>
          <input name="password" id="password" type="password" placeholder="password"/>
          <button>Sign Up</button>
        </form>
      </fieldset>
    </div>
  );
}