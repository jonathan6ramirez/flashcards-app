import React from "react";

function BreadCrumb () {
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item text-primary">Library</li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    )
}

export default BreadCrumb;