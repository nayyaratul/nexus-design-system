import { useState } from 'react';
import { Table } from '../../atoms/Table/Table';

const sampleData = [
  { name: 'Alice Johnson', subject: 'Mathematics', score: 95, grade: 'A+' },
  { name: 'Bob Smith', subject: 'Physics', score: 87, grade: 'A' },
  { name: 'Carol Davis', subject: 'Chemistry', score: 72, grade: 'B' },
  { name: 'Dan Wilson', subject: 'Biology', score: 91, grade: 'A' },
  { name: 'Eva Brown', subject: 'English', score: 68, grade: 'C+' },
];

const sectionTitle = { fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' };

export function TableShowcase() {
  const [sortCol, setSortCol] = useState('name');
  const [sortDir, setSortDir] = useState('asc');

  const sorted = [...sampleData].sort((a, b) => {
    const v = sortDir === 'asc' ? 1 : -1;
    if (sortCol === 'score') return (a.score - b.score) * v;
    return a[sortCol].localeCompare(b[sortCol]) * v;
  });

  function handleSort(col) {
    if (sortCol === col) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortCol(col);
      setSortDir('asc');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={sectionTitle}>Sizes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {['sm', 'md', 'lg'].map((size) => (
            <div key={size}>
              <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginBottom: '6px', fontWeight: 500 }}>{size.toUpperCase()}</div>
              <Table size={size}>
                <Table.Header>
                  <Table.Row>
                    <Table.Head>Name</Table.Head>
                    <Table.Head>Subject</Table.Head>
                    <Table.Head align="right">Score</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {sampleData.slice(0, 3).map((row) => (
                    <Table.Row key={row.name}>
                      <Table.Cell>{row.name}</Table.Cell>
                      <Table.Cell>{row.subject}</Table.Cell>
                      <Table.Cell align="right">{row.score}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          ))}
        </div>
      </div>

      {/* Variants */}
      <div>
        <div style={sectionTitle}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginBottom: '6px', fontWeight: 500 }}>SIMPLE</div>
            <Table variant="simple">
              <Table.Header>
                <Table.Row>
                  <Table.Head>Name</Table.Head>
                  <Table.Head>Subject</Table.Head>
                  <Table.Head align="right">Score</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {sampleData.map((row) => (
                  <Table.Row key={row.name}>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.subject}</Table.Cell>
                    <Table.Cell align="right">{row.score}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginBottom: '6px', fontWeight: 500 }}>STRIPED</div>
            <Table variant="striped">
              <Table.Header>
                <Table.Row>
                  <Table.Head>Name</Table.Head>
                  <Table.Head>Subject</Table.Head>
                  <Table.Head align="right">Score</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {sampleData.map((row) => (
                  <Table.Row key={row.name}>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.subject}</Table.Cell>
                    <Table.Cell align="right">{row.score}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>

      {/* Hoverable */}
      <div>
        <div style={sectionTitle}>Hoverable</div>
        <Table hoverable>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Subject</Table.Head>
              <Table.Head align="right">Score</Table.Head>
              <Table.Head align="center">Grade</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sampleData.map((row) => (
              <Table.Row key={row.name}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.subject}</Table.Cell>
                <Table.Cell align="right">{row.score}</Table.Cell>
                <Table.Cell align="center">{row.grade}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Bordered */}
      <div>
        <div style={sectionTitle}>Bordered</div>
        <Table bordered>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Subject</Table.Head>
              <Table.Head align="right">Score</Table.Head>
              <Table.Head align="center">Grade</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sampleData.map((row) => (
              <Table.Row key={row.name}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.subject}</Table.Cell>
                <Table.Cell align="right">{row.score}</Table.Cell>
                <Table.Cell align="center">{row.grade}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Sticky Header */}
      <div>
        <div style={sectionTitle}>Sticky Header</div>
        <div style={{ height: '200px', overflow: 'auto', border: '1px solid var(--color-border-subtle)', borderRadius: '8px' }}>
          <Table>
            <Table.Header sticky>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Subject</Table.Head>
                <Table.Head align="right">Score</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {[...sampleData, ...sampleData, ...sampleData].map((row, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.subject}</Table.Cell>
                  <Table.Cell align="right">{row.score}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>

      {/* Sortable Headers */}
      <div>
        <div style={sectionTitle}>Sortable Headers</div>
        <Table hoverable>
          <Table.Header>
            <Table.Row>
              <Table.Head
                sortable
                sortDirection={sortCol === 'name' ? sortDir : 'none'}
                onSort={() => handleSort('name')}
              >
                Name
              </Table.Head>
              <Table.Head
                sortable
                sortDirection={sortCol === 'subject' ? sortDir : 'none'}
                onSort={() => handleSort('subject')}
              >
                Subject
              </Table.Head>
              <Table.Head
                sortable
                sortDirection={sortCol === 'score' ? sortDir : 'none'}
                onSort={() => handleSort('score')}
                align="right"
              >
                Score
              </Table.Head>
              <Table.Head align="center">Grade</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sorted.map((row, i) => (
              <Table.Row key={i}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.subject}</Table.Cell>
                <Table.Cell align="right">{row.score}</Table.Cell>
                <Table.Cell align="center">{row.grade}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* With Footer and Caption */}
      <div>
        <div style={sectionTitle}>Footer &amp; Caption</div>
        <Table variant="striped">
          <Table.Caption>Student grades for Q1 2026</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Subject</Table.Head>
              <Table.Head align="right">Score</Table.Head>
              <Table.Head align="center">Grade</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sampleData.map((row) => (
              <Table.Row key={row.name}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.subject}</Table.Cell>
                <Table.Cell align="right">{row.score}</Table.Cell>
                <Table.Cell align="center">{row.grade}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Cell>Average</Table.Cell>
              <Table.Cell />
              <Table.Cell align="right">82.6</Table.Cell>
              <Table.Cell align="center">B+</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={sectionTitle}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Table size="sm" variant="striped" hoverable>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Name</Table.Head>
                  <Table.Head align="right">Score</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {sampleData.slice(0, 3).map((row) => (
                  <Table.Row key={row.name}>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell align="right">{row.score}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Table size="sm" variant="striped" hoverable>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Name</Table.Head>
                  <Table.Head align="right">Score</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {sampleData.slice(0, 3).map((row) => (
                  <Table.Row key={row.name}>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell align="right">{row.score}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
