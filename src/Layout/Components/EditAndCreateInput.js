import React from "react";

function EditAndCreateForm ({ handleSubmit }) {
    return (
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Deck Name" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Description</label>
              <textarea class="form-control" id="form4Example3" placeholder="Brief description of the deck" rows="5"></textarea>
            </div>
          </div>
          <a class="btn btn-secondary" href="/" role="button">Cancel</a>
          <button class="btn btn-primary mx-2" >Submit</button>
        </form>
    )
}
export default EditAndCreateForm