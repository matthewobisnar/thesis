<div class="modal fade" id="request_modal-0" tabindex="-1" aria-labelledby="pending_request_modal-0" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="pending_request_modal-0">Customer Info</h5>
            <button type="button" class="btn-close btn-light rounded-circle bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form>
            <div class="modal-body">
                <input type="hidden" name="id" value="">
                <div class="row ms-4">
                    <div class="col">
                        <p><i class="material-icons float-start me-2">portrait</i>
                            <span class="opacity-75" id="fullName">
                            </span>
                        </p>
                        <p><i class="material-icons float-start me-2">alternate_email</i>
                            <span class="opacity-75" id="email">
                            </span>
                        </p>
                    </div>
                    <div class="col">
                        <p><i class="material-icons float-start me-2">phone_iphone</i><span class="opacity-75" id="mobileNumber"></span></p>
                        <p><i class="material-icons float-start me-2">event_note</i><span class="opacity-75" id="dateCreated"></span></p>
                    </div>
                </div>
                <h6 class="mt-3">Inquiry Details:</h6>
                <p class="float-end">
                    <div class="container mt-2">
                    <textarea class="opacity-75 form-control textarea" id="requestDetails"></textarea>
                    </div>
                </p>
            </div>
            <div class="container d-grid gap-2 mb-4 mt-2">
                <button type="button" class="btn btn-outline-success" id="approved" name="approve">Approve</button>
                <button type="button" class="btn btn-outline-danger" id="turndown" name="turndown">Turn down</button>
            </div>
            </div>
        </form>
    </div>
</div>