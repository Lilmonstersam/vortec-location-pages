const enquiryDialog = document.querySelector('#service-enquiry');
const enquiryForm = document.querySelector('#service-form');
const enquiryStatus = document.querySelector('#form-status');
const caseScroller = document.querySelector('#case-scroll');
const casePrev = document.querySelector('[data-case-prev]');
const caseNext = document.querySelector('[data-case-next]');

let enquiryTrigger = null;

document.querySelectorAll('[data-open-enquiry]').forEach((button) => {
  button.addEventListener('click', () => {
    enquiryTrigger = button;
    enquiryStatus.textContent = '';
    enquiryDialog.showModal();
    document.body.classList.add('dialog-open');
    enquiryDialog.querySelector('input[name="First Name"]').focus();
  });
});

function closeEnquiry() {
  enquiryDialog.close();
}

enquiryDialog.querySelector('[data-close-enquiry]').addEventListener('click', closeEnquiry);
enquiryDialog.addEventListener('click', (event) => {
  if (event.target === enquiryDialog) closeEnquiry();
});
enquiryDialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  enquiryTrigger?.focus();
});

enquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;

  const details = [...new FormData(enquiryForm)].map(([label, value]) => `${label}: ${String(value).trim()}`);
  const subject = 'Melbourne hydromulching service enquiry';
  const body = ['Hello Vortec,', '', 'I would like to enquire about a service for my project.', '', ...details, '', 'Please contact me to discuss the scope.'].join('\n');
  const draftUrl = `mailto:sales@vortecglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  enquiryStatus.textContent = 'Your email app should open with a draft. Send it to complete your enquiry. ';
  const fallback = document.createElement('a');
  fallback.href = draftUrl;
  fallback.textContent = 'Open the email draft again';
  enquiryStatus.append(fallback);
  window.location.href = draftUrl;
});

function scrollCases(direction) {
  const card = caseScroller.querySelector('.proof-card');
  if (!card) return;
  const gap = Number.parseFloat(getComputedStyle(caseScroller).gap) || 0;
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  caseScroller.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior });
}

function updateCaseControls() {
  casePrev.disabled = caseScroller.scrollLeft <= 2;
  caseNext.disabled = caseScroller.scrollLeft + caseScroller.clientWidth >= caseScroller.scrollWidth - 2;
}

casePrev.addEventListener('click', () => scrollCases(-1));
caseNext.addEventListener('click', () => scrollCases(1));
caseScroller.addEventListener('scroll', updateCaseControls, { passive: true });
window.addEventListener('resize', updateCaseControls);
updateCaseControls();
