import { Link } from './Link';

export default {
  title: 'Atoms/Link',
};

export const Default = {
  render: () => <Link href="#">Default link</Link>,
};

export const Subtle = {
  render: () => <Link href="#" variant="subtle">Subtle link</Link>,
};

export const External = {
  render: () => <Link href="https://example.com" external>External link</Link>,
};

export const Disabled = {
  render: () => <Link href="#" disabled>Disabled link</Link>,
};

export const InlineWithText = {
  render: () => (
    <p style={{ fontSize: '14px', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
      This is a paragraph with an <Link href="#">inline link</Link> that inherits the surrounding font size and flows naturally within the text.
    </p>
  ),
};
