const task = projectData.tasks[0];

// Inject task info
document.getElementById("task-title").innerText = task.task_title;
document.getElementById("task-description").innerText = task.task_description;

const assetsContainer = document.getElementById("assets-container");

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
      <p>${asset.asset_description}</p>
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

  if (asset.asset_content_type === "article") {
    return `<textarea rows="6" style="width:100%"></textarea>`;
  }

  if (asset.asset_content_type === "threadbuilder") {
    return `
      <input type="text" placeholder="Enter your thread here" style="width:100%; padding:8px" />
    `;
  }

  return "";
}
task.assets.forEach(asset => {
  const assetElement = createAsset(asset);
  assetsContainer.appendChild(assetElement);
});
