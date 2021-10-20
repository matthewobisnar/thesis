<div class="modal fade" id="todo" tabindex="-1" aria-labelledby="todo" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Project</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="project-name" class="col-form-label">Project Name:</label>
            <input type="text" class="form-control" id="project-name">
          </div>
          <div class="mb-3">
            <label for="project-description" class="col-form-label">Project Description:</label>
            <textarea class="form-control" id="project-description" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label for="project-date" class="col-form-label">Set Due Date:</label>
            <input type="date" class="form-control" id="project-date">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="creteEmployee">Submit</button>
      </div>
    </div>
  </div>
</div>