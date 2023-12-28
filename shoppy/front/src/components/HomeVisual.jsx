import HomeVisualContents from "./HomeVisualContents";
export default function HomeVisual(){
  return(
    <div className="home_visual_wrap inner">
      <div className="home_visual_main_wrap">
        <img className="home_visual_img" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <h2 className="home_visual_img_text">Shop With US</h2>
      </div>
      <div className="home_visual_sub_wrap">
        <HomeVisualContents
          imgNum="5"
          page={22}
        />
        <HomeVisualContents
          imgNum="6"
          page={23}
        />
        <HomeVisualContents
          imgNum="7"
          page={24}
        />
      </div>
    </div>
  );
}