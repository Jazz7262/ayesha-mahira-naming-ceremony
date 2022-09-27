import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. B. Shujat Ahmed</h2>
                <h5>
                    Sugappa Tower, Azad Nagar, <br />
                    Raichur,
                    <br />
                    Karnataka - 584 101.
                </h5>
                <p className="address">
                    Contact: +91 91138 13919, <br /> +91 86603 09954.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
