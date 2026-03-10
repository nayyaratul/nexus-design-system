import { FormField } from './FormField';
import { Input } from '../Input/Input';
import { InputField } from '../InputField/InputField';
import { Textarea } from '../Textarea/Textarea';
import { Select, SelectTrigger, SelectContent, SelectItem } from '../Select/Select';

export default {
  title: 'Atoms/FormField',
  component: FormField,
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Email',
    htmlFor: 'email',
    children: <Input id="email" placeholder="you@example.com" />,
  },
};

export const WithHint = {
  args: {
    label: 'Password',
    htmlFor: 'password',
    hint: 'Must be at least 8 characters',
    children: <Input id="password" type="password" placeholder="Enter password" />,
  },
};

export const WithError = {
  args: {
    label: 'Email',
    htmlFor: 'email-err',
    required: true,
    error: 'Please enter a valid email address',
    children: <Input id="email-err" type="email" error placeholder="you@example.com" />,
  },
};

export const Disabled = {
  args: {
    label: 'Username',
    htmlFor: 'username',
    disabled: true,
    children: <Input id="username" disabled placeholder="Not editable" />,
  },
};

export const WithInputFieldIcons = {
  render: () => (
    <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FormField label="Search" htmlFor="search" hint="Type a keyword">
        <InputField id="search" kind="search" placeholder="Search courses" />
      </FormField>
      <FormField label="Password" htmlFor="password" required>
        <InputField id="password" kind="password" placeholder="Enter password" />
      </FormField>
      <FormField label="Start date" htmlFor="start-date">
        <InputField
          id="start-date"
          kind="date"
          placeholder="DD/MM/YYYY"
          iconPosition="right"
        />
      </FormField>
    </div>
  ),
};

export const WithTextarea = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <FormField label="Description" htmlFor="desc" hint="Max 500 characters">
        <Textarea id="desc" placeholder="Enter a description..." />
      </FormField>
    </div>
  ),
};

export const WithSelect = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <FormField label="Department" htmlFor="dept" required>
        <Select>
          <SelectTrigger placeholder="Select department" />
          <SelectContent>
            <SelectItem value="eng">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="product">Product</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
    </div>
  ),
};
