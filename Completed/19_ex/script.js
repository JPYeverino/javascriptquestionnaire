window.onload = function () {

  let modelData = (function () {

    function requestData(callback) {

      const url = 'data.json';

      fetch(url)
        .then(data => data.json())
        .then(res => { callback(res) });
    }

    return {
      requestData: requestData
    }

  })();

  let viewModule = (function () {

    let addLink = document.getElementById('addLink');
    let template = document.getElementById('dataRow').content;
    let table = document.getElementById('myTable');

    function render(data) {

      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }

      for (let j = 0; j < data.length; j++) {

        let row = template.cloneNode(true);
        row.querySelector('.row').id = j;
        row.querySelector('.name').textContent = data[j].name;
        row.querySelector('.lname').textContent = data[j].lastname;
        row.querySelector('.phnumber').textContent = data[j].phoneNumber;
        row.querySelector('.name').contentEditable = false;
        row.querySelector('.lname').contentEditable = false;
        row.querySelector('.phnumber').contentEditable = false;
        table.appendChild(row);
      }
    }

    addLink.addEventListener('click', addLinkHandler);

    function addLinkHandler(e) {
      e.preventDefault();
      let row = template.cloneNode(true);
      row.querySelector('.name').contentEditable = true;
      row.querySelector('.lname').contentEditable = true;
      row.querySelector('.phnumber').contentEditable = true;
      table.appendChild(row);
    }


    return {
      render: render
    }

  })();

  let presenterModule = (function () {

    modelData.requestData(viewModule.render);
  })();


}


