// AJAX Call to display feature cards on Home Page
$(document).ready(function () {
  $.getJSON("features.json", function (data) {
    $.each(data, function (i, feature) {
      $("#feature-cards").append(`
      <div class="card my-3">
        <img
          class="card-img-top"
          src="${feature.img}"
          alt="${feature.cardTitle}"
        />
        <div class="card-body">
          <h4 class="card-title">${feature.cardTitle}</h4>
          <p class="card-text">
          ${feature.cardText}
          </p>
          <a href="${feature.cardLink}" class="btn btn-primary"
            >${feature.cardButton}</a
          >
        </div>
      </div>
      `);
    });
  });
});

// AJAX Method in JQuery to display Course Cards on Search Page
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "courses.json",
    dataType: "json",
  }).done(function (data) {
    //   console.log(data);
    $.map(data, function (course, i) {
      $("#course-cards").append(
        `
            <div class="card my-4">
            <div class="card-body">
              <h4 class="card-title my-2">${course.courseName}</h4>
              <h6 class="card-subtitle my-2">${course.courseId}</h6>
              <p class="card-text my-2">
                ${course.courseStage} | ${course.courseDuration} | ${course.courseType} | ${course.courseLevel} | ${course.courseLocation}
              </p>
              <button
                type="button"
                class="btn btn-primary float-end"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                View Modules
              </button>
            </div>
          </div>
            `
      );
    });
  });
});

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "modules.json",
    dataType: "json",
  }).done(function (data) {
    // console.log(data);
    $.map(data, function (modules, i) {
      $("#accordionModules").append(`
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading-${modules.id}">
                <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-${modules.id}"
                    aria-expanded="false"
                    aria-controls="collapse-${modules.id}"
                >
                    ${modules.moduleName}
                </button>
            </h2>
            <div
            id="collapse-${modules.id}"
            class="accordion-collapse collapse"
            aria-labelledby="heading-${modules.id}"
            data-bs-parent="#accordionModules"
            >
                <div class="accordion-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: <b>${modules.moduleId}</b></li>
                        <li class="list-group-item">
                            Semester: <b>${modules.moduleSemester}</b>
                        </li>
                        <li class="list-group-item">
                            Start Date: <b>${modules.moduleStart}</b>
                        </li>
                        <li class="list-group-item">
                            End Date: <b>${modules.moduleEnd}</b>
                        </li>
                        <li class="list-group-item">
                            Lecturer: <b>${modules.moduleLecturer}</b>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
        `);
    });
  });
});

// Display daily schedule on schedule page
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "schedule.json",
    dataType: "json",
  }).done(function (data) {
    // console.log(data.weekly);
    $.map(data.daily, function (schedule, i) {
      $("#daily-container").append(`
      <div class="row mt-3">
       <div class="col-4 border pt-3">
         <p>${schedule.startTime}</p>
         <hr />
         <p>${schedule.endTime}</p>
       </div>
       <div class="col-8 border pt-3">
         <h6>${schedule.moduleName}</h6>
         <p>
           Room No. ${schedule.moduleRoom} | ${schedule.moduleLocation} |
           ${schedule.courseID} | ${schedule.courseName} |
           ${schedule.moduleDuration} hours | ${schedule.moduleStudents} Students
         </p>
       </div>
     </div>
      `);
    });

    // weekly data - monday
    const mondaySchedule = data.weekly[0].monday;
    // console.log(mondaySchedule);
    $.map(mondaySchedule, function (schedule, i) {
      $("#monday").append(`
      <div class="row shadow-sm pt-2 my-3">
      <div class="col-3">
        <p>${schedule.startTime}</p>
      </div>
      <div class="col-9">
        <h6>${schedule.moduleName}</h6>
        <p>
          <i class="fa fa-location-dot me-1"></i> Room ${schedule.moduleRoom} - ${schedule.moduleLocation}
        </p>
      </div>
    </div>
      `);
    });

    // weekly data - tuesday
    const tuesdaySchedule = data.weekly[1].tuesday;
    // console.log(tuesdaySchedule);
    $.map(tuesdaySchedule, function (schedule, i) {
      $("#tuesday").append(`
      <div class="row shadow-sm pt-2 my-3">
      <div class="col-3">
        <p>${schedule.startTime}</p>
      </div>
      <div class="col-9">
        <h6>${schedule.moduleName}</h6>
        <p>
          <i class="fa fa-location-dot me-1"></i> Room ${schedule.moduleRoom} - ${schedule.moduleLocation}
        </p>
      </div>
    </div>
      `);
    });

    // weekly data - wednesday
    const wednesdaySchedule = data.weekly[2].wednesday;
    // console.log(wednesdaySchedule);
    $.map(wednesdaySchedule, function (schedule, i) {
      $("#wednesday").append(`
      <div class="row shadow-sm pt-2 my-3">
      <div class="col-3">
        <p>${schedule.startTime}</p>
      </div>
      <div class="col-9">
        <h6>${schedule.moduleName}</h6>
        <p>
          <i class="fa fa-location-dot me-1"></i> Room ${schedule.moduleRoom} - ${schedule.moduleLocation}
        </p>
      </div>
    </div>
      `);
    });

    // weekly data - thursday
    const thursdaySchedule = data.weekly[3].thursday;
    // console.log(thursdaySchedule);
    $.map(thursdaySchedule, function (schedule, i) {
      $("#thursday").append(`
      <div class="row shadow-sm pt-2 my-3">
      <div class="col-3">
        <p>${schedule.startTime}</p>
      </div>
      <div class="col-9">
        <h6>${schedule.moduleName}</h6>
        <p>
          <i class="fa fa-location-dot me-1"></i> Room ${schedule.moduleRoom} - ${schedule.moduleLocation}
        </p>
      </div>
    </div>
      `);
    });

    // weekly data - friday
    const fridaySchedule = data.weekly[4].friday;
    // console.log(fridaySchedule);
    $.map(fridaySchedule, function (schedule, i) {
      $("#friday").append(`
      <div class="row shadow-sm pt-2 my-3">
      <div class="col-3">
        <p>${schedule.startTime}</p>
      </div>
      <div class="col-9">
        <h6>${schedule.moduleName}</h6>
        <p>
          <i class="fa fa-location-dot me-1"></i> Room ${schedule.moduleRoom} - ${schedule.moduleLocation}
        </p>
      </div>
    </div>
      `);
    });

    // monthly data - week 1
    const week1Month = data.monthly[0].week1;
    // console.log(week1Month);
    $.map(week1Month, function (schedule, i) {
      $("#week1").append(`
      <li class="list-group-item align-items-center">
        <div class="row">
          <div class="col-3">${schedule.moduleDay}</div>
          <div class="col-7">
            ${schedule.moduleName}
          </div>
          <div class="col-2">
            <span class="badge bg-primary rounded-pill">${schedule.moduleDuration}</span>
          </div>
        </div>
      </li>
      `);
    });

    // monthly data - week 2
    const week2Month = data.monthly[1].week2;
    // console.log(week2Month);
    $.map(week2Month, function (schedule, i) {
      $("#week2").append(`
      <li class="list-group-item align-items-center">
        <div class="row">
          <div class="col-3">${schedule.moduleDay}</div>
          <div class="col-7">
            ${schedule.moduleName}
          </div>
          <div class="col-2">
            <span class="badge bg-primary rounded-pill">${schedule.moduleDuration}</span>
          </div>
        </div>
      </li>
      `);
    });

    // monthly data - week 3
    const week3Month = data.monthly[2].week3;
    // console.log(week3Month);
    $.map(week3Month, function (schedule, i) {
      $("#week3").append(`
      <li class="list-group-item align-items-center">
        <div class="row">
          <div class="col-3">${schedule.moduleDay}</div>
          <div class="col-7">
            ${schedule.moduleName}
          </div>
          <div class="col-2">
            <span class="badge bg-primary rounded-pill">${schedule.moduleDuration}</span>
          </div>
        </div>
      </li>
      `);
    });

    // monthly data - week 4
    const week4Month = data.monthly[3].week4;
    // console.log(week4Month);
    $.map(week4Month, function (schedule, i) {
      $("#week4").append(`
      <li class="list-group-item align-items-center">
        <div class="row">
          <div class="col-3">${schedule.moduleDay}</div>
          <div class="col-7">
            ${schedule.moduleName}
          </div>
          <div class="col-2">
            <span class="badge bg-primary rounded-pill">${schedule.moduleDuration}</span>
          </div>
        </div>
      </li>
      `);
    });

    // monthly data - week 5
    const week5Month = data.monthly[4].week5;
    // console.log(week5Month);
    $.map(week5Month, function (schedule, i) {
      $("#week5").append(`
      <li class="list-group-item align-items-center">
        <div class="row">
          <div class="col-3">${schedule.moduleDay}</div>
          <div class="col-7">
            ${schedule.moduleName}
          </div>
          <div class="col-2">
            <span class="badge bg-primary rounded-pill">${schedule.moduleDuration}</span>
          </div>
        </div>
      </li>
      `);
    });
  });
});

// Insert student list on classroom page using AJAX Call
$(document).ready(function () {
  $.getJSON("students.json", function (data) {
    //  console.log(data);
    $.each(data, function (i, student) {
      $("#student-list").append(`
      <li class="list-group-item">
        ${student.name} <br />
         &nbsp; &nbsp;
         <a href="mailto:${student.email}">${student.email}</a>
       </li>
      `);
    });
  });
});

// function to submit the Add Student Form information into the students.json file

$(document).ready(function () {
  // on submit event of the form
  // get the data from the form
  $("#add-student").submit(function (e) {
    e.preventDefault();
    const name = $("#uname").val();
    const email = $("#email").val();
    const student = {
      name: name,
      email: email,
    };
    // console.log(student);
    // add this student data from form to local storage
    localStorage.setItem("student", JSON.stringify(student));
    // console.log(localStorage.getItem("student"));
    alert("Student Added Successfully to Your Students List");
    // access this data from local storage and parse it
    const studentData = JSON.parse(localStorage.getItem("student"));
    // console.log(studentData);
    $("#student-list").append(`
        <li class="list-group-item">
          ${studentData.name} <br />
            &nbsp; &nbsp;
            <a href="mailto:${studentData.email}">${studentData.email}</a>
        </li>
      `);

    // add this student data to the select option list on the 'Send New Message' Form on the Classroom Page
    $("#class-ppl").append(`
      <option value="${studentData.email}">${studentData.email}</option>
    `);
  });
});

// slide toggle function in JQUERY to toggle subtitle on classroom page
$(document).ready(function () {
  $("#welcomeClass").click(function (e) {
    e.preventDefault();
    $("#welcomeMsg").slideToggle().removeClass("d-none");
  });
});

// Update the options list with student emails on 'Send New Message' Form on the Classroom Page
$(document).ready(function () {
  $.getJSON("students.json", function (data) {
    // console.log(data);
    $.each(data, function (i, student) {
      $("#class-ppl").append(`
      <option value="${student.email}">${student.email}</option>
      `);
    });
  });
});

// display the messages on classroom page from messages JSON
$(document).ready(function () {
  $.getJSON("messages.json", function (data) {
    // console.log(data);
    $.each(data, function (i, message) {
      $("#message-cards").append(`
      <div class="card my-3">
          <div class="card-header">
            <h5>${message.messageTitle}</h5>
            <p>To: ${message.messageRecipient}</p>
          </div>
          <div class="card-body">
            <p>
              ${message.messageBody}
            </p>
          </div>
          <div class="card-footer">
            <p>${message.messageDate}  ${message.messageTime}</p>
          </div>
        </div>
      `);
    });
  });
});

// function to submit the 'Send New Message' Form information into the messages.json file
$(document).ready(function () {
  // on submit event of the form
  // get the data from the form
  $("#send-message").submit(function (e) {
    e.preventDefault();
    const messageTitle = $("#msg-title").val();
    const messageBody = $("#msg-body").val();
    const messageRecipient = $("#class-ppl").val();
    // create date and time variables using in built date method
    const messageDate = new Date().toLocaleDateString();
    const messageTime = new Date().toLocaleTimeString();
    // console.log(messageDate);
    // console.log(messageTime);
    const message = {
      messageTitle: messageTitle,
      messageBody: messageBody,
      messageDate: messageDate,
      messageTime: messageTime,
      messageRecipient: messageRecipient,
    };
    // console.log(message);
    // add this message data from form to local storage
    localStorage.setItem("message", JSON.stringify(message));
    // console.log(localStorage.getItem("message"));
    alert("Message Sent Successfully");
    // clear the form fields after submit
    $("#msg-title").val("");
    $("#msg-body").val("");

    // display the message on classroom page
    // access this data from local storage and parse it
    const messageData = JSON.parse(localStorage.getItem("message"));
    console.log(messageData);
    $("#message-cards").prepend(`
    <div class="card my-3">
        <div class="card-header">
          <h5>${messageData.messageTitle}</h5>
          <p>To: ${messageData.messageRecipient}</p>
        </div>
        <div class="card-body">
          <p>
            ${messageData.messageBody}
          </p>
        </div>
        <div class="card-footer">
          <p>${messageData.messageDate}  ${messageData.messageTime}</p>
        </div>
      </div>
  `);
  });
});
