/*
// GET JSON Method with JQuery to display Course Cards on Search Page
$(document).ready(function () {
  $.getJSON("courses.json", function (data) {
    $.each(data, function (i, course) {
      $("#course-cards").append(`
              <div class="card my-4">
              <div class="card-body">
                <h4 class="card-title my-2">${course.courseName}</h4>
                <h6 class="card-subtitle my-2">${course.courseId}</h6>
                <p class="card-text my-2">
                  ${course.courseStage} | ${course.courseDuration} | ${course.courseType} | ${course.courseLevel} | ${course.courseLocation}
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  View Modules
                </button>
              </div>
            </div>
              `);
    });
  });
});
*/

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
                class="btn btn-primary"
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
                    <a
                    class="btn btn-success btn-sm my-2"
                    href="#"
                    id="${modules.moduleID}"
                    role="button"
                    >
                    Add to Schedule
                    </a>
                </div>
            </div>
      </div>
        `);
    });
  });
});

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "schedule.json",
    dataType: "json",
  }).done(function (data) {});
});
