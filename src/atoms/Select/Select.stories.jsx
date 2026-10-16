import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel } from './Select';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Select',
  parameters: { design: figmaDesign('Atoms/Select') },
  component: Select,
  argTypes: {},
};

export const Default = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Select>
        <SelectTrigger placeholder="Choose a fruit" />
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 320 }}>
      <Select>
        <SelectTrigger size="sm" placeholder="Small" />
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="md" placeholder="Medium" />
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg" placeholder="Large" />
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithGroups = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Select>
        <SelectTrigger placeholder="Choose a course" />
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Science</SelectLabel>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
            <SelectItem value="biology">Biology</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Arts</SelectLabel>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="history">History</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Error = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Select>
        <SelectTrigger placeholder="Required field" error />
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Select disabled>
        <SelectTrigger placeholder="Disabled" />
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
