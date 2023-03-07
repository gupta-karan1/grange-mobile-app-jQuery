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

  // AJAX Method in JQUERY to display Module List within each Course Card on Search Page
  $.ajax({
    method: "GET",
    url: "modules.json",
    dataType: "json",
  }).done(function (data) {
    console.log(data);
    $.map(data, function (module, i) {
      $("#accordionModules").append(`
            <div class="accordion-item">
                    <h2 class="accordion-header" id="${module.id}">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse${module.id}"
                        aria-expanded="false"
                        aria-controls="collapse${module.id}"
                      >
                      ${module.id}
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="${module.id}"
                      data-bs-parent="#accordionModules"
                    >
                      <div class="accordion-body">
                        <ul class="list-group">
                          <li class="list-group-item">ID: <b>MED9027</b></li>
                          <li class="list-group-item">
                            Semester: <b>2021-22</b>
                          </li>
                          <li class="list-group-item">
                            Start Date: <b>September 1, 2021</b>
                          </li>
                          <li class="list-group-item">
                            End Date: <b>August 31, 2022</b>
                          </li>
                          <li class="list-group-item">
                            Lecturer: <b>Dr. Keith Gardiner</b>
                          </li>
                        </ul>
                        <a
                          class="btn btn-success btn-sm my-2"
                          href="#"
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
