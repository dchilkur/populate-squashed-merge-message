var registerEventHandlerSquashButton = function() {
  var squashButton = document.querySelector('.merge-message .btn-group-squash');
 
  if (!squashButton) return;

  squashButton.addEventListener('click', function() {
    setCommitTitleFromPrTitle();
  });
}

var populateDescriptionSquashMergeMessage = function(changeType) {
  if(changeType==="breaking"){
    document.getElementById('merge_message_field').value = "BREAKING CHANGES: [PLACEHOLDER]";
  }else{
    document.getElementById('merge_message_field').value = "";
  }
  setCommitTitleFromPrTitle();
}

var setCommitTitleFromPrTitle = function() {
  var prTitle = document.querySelector('.js-issue-title').textContent;
  document.getElementById('merge_title_field').value = prTitle.trim();
}

chrome.runtime.onMessage.addListener(function(value){
  populateDescriptionSquashMergeMessage(value);
})

registerEventHandlerSquashButton();

