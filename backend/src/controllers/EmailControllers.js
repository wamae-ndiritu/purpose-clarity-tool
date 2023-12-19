const nodemailer = require("nodemailer");
const smtpTranspoter = require("nodemailer-smtp-transport");
const PCTUser = require("../models/PCTUser");
const MPSUser = require("../models/MPSUser");

const AUTH_EMAIL = process.env.AUTH_EMAIL;
const AUTH_PASS = process.env.AUTH_PASS;
const MAIL_HOST = process.env.MAIL_HOST;
const MPS_URL = process.env.MPS_URL;
const PCT_URL = process.env.PCT_URL;

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
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
    from: `The Good Success <${AUTH_EMAIL}>`,
    to: email,
    subject: "Answers to 7 Questions Purpose Clarification Tool",
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
    return res.status(500).json({ message: "Feadback email not sent!" });
  }
};

const sendPasswordResetMail = async ({ id, fullName, email }, CLIENT_URL) => {
  const app_name = CLIENT_URL.split("/")[2].split(".")[0];
  const mailOptions = {
    from: `The Good Success <${AUTH_EMAIL}>`,
    to: email,
    subject: `${
      app_name === "mps"
        ? "Reset Password - My Purpose Story"
        : "Reset Password - Purpose Clarity Tool"
    }`,
    html: `
    <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333;">
    Hi <span style="font-weight: bold; color: #931A1D;">${fullName},</span>
    <br>
    A request to reset your password was made. Please
    <a href="${CLIENT_URL}/account/login?user=${id}&action=reset-password" style="display: inline-block; margin-top: 10px; padding: 8px 16px; background-color: #931A1D; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold;">
        Click here to reset
    </a>.
    If it wasn't you, you can ignore this.
</p>
<p style="font-family: Arial, sans-serif; font-size: 14px; color: #931A1D; margin-top: 20px;">
    Best regards,
    <br>
    ${app_name === "mps" ? "My Purpose Story" : "Purpose Clarity Tool"}
</p>
`,
  };

  await transporter.sendMail(mailOptions);
};

// FORGOT PASSWORD
exports.resetPasswordPCTUser = async (req, res) => {
  const email = req.body.email;

  const user = await PCTUser.findOne({ email });

  if (user) {
    sendPasswordResetMail(user, PCT_URL);
    res.status(201).json({ message: "Reset Email sent" });
  } else {
    res.status(404).json({ message: "Account does not exist!" });
  }
};

exports.resetPasswordMPSUser = async (req, res) => {
  const email = req.body.email;

  const user = await MPSUser.findOne({ email });

  if (user) {
    sendPasswordResetMail(user, MPS_URL);
    res.status(201).json({ message: "Reset Email sent" });
  } else {
    res.status(404).json({ message: "Account does not exist!" });
  }
};
