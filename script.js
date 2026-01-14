const task = projectData.tasks[0];

// Inject task info
document.getElementById("task-title").innerText = task.task_title;
document.getElementById("task-description").innerText = task.task_description;

const assetsContainer = document.getElementById("assets-container");
/* Journey board arrow toggle */
const board =document.getElementById("journeyBoard");
const toggleBtn =document.getElementById("jbToggle");

toggleBtn.addEventListener("click", ()=>{
  board.classList.toggle("collapsed");
})
/* 🔁 REUSABLE COMPONENT */
function createAsset(asset) {
  const assetDiv = document.createElement("div");
  assetDiv.classList.add("asset");

  assetDiv.innerHTML = `
    <div class="asset-header">
      <span class="asset-title">${asset.asset_title}</span>
       <div class="asset-icons">
      <span class="info-icon"><img src="assets/icons/info.svg" alt="info"></span>
        </div>
    </div>

    <div class="asset-body">
    <div class="asset-content">
    <p class="asset-description">
     <span class="description-label">Description:</span>
      <span class="asset-text">${asset.asset_description}</span>
      </p> </div>

    <!-- full width border -->
  <div class="asset-divider"></div>
      ${renderAssetContent(asset)}
    </div>
  `;

  // Expand / Collapse
  // assetDiv.querySelector(".asset-header").addEventListener("click", () => {
  //   assetDiv.classList.toggle("expanded");
  // });

  return assetDiv;
}

function renderAssetContent(asset) {
  if (asset.asset_content_type === "video") {
    return `
      <iframe width="100%" height="250"
        src="${asset.asset_content}"
        width="100%"
        height="250"
        frameborder="0"
        allowfullscreen>
      </iframe>
    `;
  }

  if (asset.asset_content_type === "article_input") {
    return `<div class="article-input">
        <label for="title" class="field-label">Title</label>
        <input id="title" type="text" class="article-title-input" />

        <label for="content" class="field-label">Content</label>
        <!-- TOOLBAR BOX -->
        <div class="editor-wrapper">
        <div class="editor-box">
        <div class="editor-toolbar">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Insert</span>
          <span>Format</span>
          <span>Tools</span>
          <span>Table</span>
          <span>Help</span>
        </div>
        <div class="content-toolbar"><img src="assets/icons/content-toolbar.svg" alt="content-toolbar"></div>
        </div>

        <!-- TEXTAREA BOX -->
       <textarea id="content" type="text" class="article-editor"></textarea>
      </div>
      </div>

        `;}
        /* 4SA METHOD */
        if(asset.asset_content_type === "article_display"){
          return `
           <div class="accordion">

        <div class="accordion-item open">
          <div class="accordion-header">
            <span class="arrow"> <img src="assets/icons/arrow.svg" alt="arrow"></span>
            <span>Introduction</span>
          </div>
          <div class="accordion-body">
            <p>The 4SA Method, How to bring an idea into progress?</p>
              <div class="see-more-wrapper">
            <button class="see-more">See More</button> </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header">
            <span class="arrow"> <img src="assets/icons/arrow.svg" alt="arrow"></span>
            <span>Thread A</span>
          </div>
          <div class="accordion-body">
            <p>
              How are you going to develop your strategy?
              Which method are you going to use?
              What if the project is lengthy?
            </p>
            <div class="see-more-wrapper">
         <button class="see-more">See More</button>
         </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header">
            <span>Example 1</span>
          </div>
          <div class="accordion-body">
            <p>You have a concept, how will you put it into progress?</p>
          </div>
        </div>

      </div>
          `
        }
  

  if (asset.asset_content_type === "threadbuilder") {
    return `
     
  <div class="threadbuilder">
    <!-- Thread Header -->
     <div class="thread-header">
     <span class="thread-arrow"><img src="assets/icons/arrow.svg" alt="arrow"></span>
     <span class="thread-title">Thread A</span>
  </div>

  <!-- Thread Body -->
   <div class="thread-body">

    <div class="thread-inputs">
      <div class="input-card">
        <label for="text">Sub thread 1</label>
        <textarea id="text" type="text" placeholder="Enter Text here"></textarea>
      </div>
       <div class="input-card">
         <label for="Interpretation">Sub Interpretation 1</label>
        <textarea id="Interpretation" type="text" placeholder="Enter Text here"></textarea>
       </div>
    </div>

    <!-- Icons row -->
     <div class="thread-icons">
      <span><img src="assets/icons/thread-icon.svg" alt="thread-icons"></span>
     

     <select >
      <option >Select Categ</option>
     </select>
     <select >
      <option >Select Process</option>
     </select>
       </div>

     <!-- Add sub thread -->
      <button class="add-thread">+ Sub-thread</button>

      <!-- Summary -->
       <div class="summary">
        <label>Summary for Thread A</label>
        <textarea placeholder="Enter Text Here"></textarea>
       </div>
   </div>
  </div>
  
    `;
  }

  return "";
}
task.assets.forEach(asset => {
  const assetElement = createAsset(asset);
  assetsContainer.appendChild(assetElement);
});
