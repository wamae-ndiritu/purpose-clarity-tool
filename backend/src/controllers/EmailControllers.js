const nodemailer = require("nodemailer");
const smtpTranspoter = require("nodemailer-smtp-transport");

const AUTH_EMAIL = process.env.AUTH_EMAIL;
const AUTH_PASS = process.env.AUTH_PASS;

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

// TESTING THE TRANSPORTER
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready for sending mails");
    console.log(success);
  }
});

// SEND MAIL
exports.submitForFeadback = async (req, res) => {
  // console.log(req.body);
  const {
    identity,
    strengths,
    passions,
    target_audience,
    beneficiary_needs,
    impact,
    revenue_sources,
    purpose_statement,
  } = req.body;
  const { firstName, lastName, email } = req.user;

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: `<h4>Answers to 7 Questions Purpose Clarification Tool</h4>`,
    html: `
    <p><h4>${
      (firstName, lastName)
    }</h4> submitted his responses to Purpose Clarity Tool</p>
    <ol>
    <li>
    <strong>Who are you?</strong>
    <br />
    <span>${identity}</span>
    </li>
    <li>
    <strong>What do you do well?</strong>
    <br />
    <span>${strengths}</span>
    </li>
    <li>
    <strong>What do you love to do?</strong>
    <br />
    <span>${passions}</span>
    </li>
    <li>
    <strong>Whom do you intend to serve?</strong>
    <br />
    <span>${target_audience}</span>
    </li>
    <li>
    <strong>What do your beneficiaries need?</strong>
    <br />
    <span>${beneficiary_needs}</span>
    </li>
    <li>
    <strong>How do your offerings transform your beneficiaries?</strong>
    <br />
    <span>${impact}</span>
    </li>
    <li>
    <strong>What activities can generate income for you?</strong>
    <br />
    <span>${revenue_sources}</span>
    </li>
    </ol>
    <h4><strong>The Purpose Statement</strong></h4>
    <p>${purpose_statement}</p>

    <p>These responses were submitted from the <i><strong>Purpose Clarification Tool by ${email}.</strong></i></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Feedback email sent successfully!" });
    console.log("Feedback email sent successfully!");
  } catch (error) {
    console.error("Error sending feedback email:", error);
    return res.status(500).json({ message: "Feadback email not sent!" });
  }
};
