import { notebookCode, notebookFile } from './notebookCode.js';

const labels = ['Notebook Setup', 'Data Preparation', 'Core Operations', 'Data Inspection', 'Results Review', 'Complete Notebook'];

const procedures = [
  ['Open the supplied notebook.', 'Run the imports in the stated order.', 'Confirm the required libraries are available.'],
  ['Read the supplied source exactly as written.', 'Run the cell in a notebook environment.', 'Compare the result with the recorded output.'],
  ['Execute the original operations.', 'Keep the same input values and settings.', 'Inspect the returned result.'],
  ['Run the notebook cell.', 'Review the displayed values and structure.', 'Record the observation.'],
  ['Execute the relevant notebook cells.', 'Compare the result with the recorded notebook output.', 'Save the observation.'],
  ['Run the complete supplied notebook in order.', 'Use the bundled notebook download when required.', 'Review the recorded output below.']
];

const recorded = {
  exp1: [
    'Collecting openpyxl\nSuccessfully installed et-xmlfile-2.0.0 openpyxl-3.1.5',
    'No output',
    '  Car_ID     Brand   Model  Year Fuel_Type Transmission  Engine_CC\n0   C001  Mahindra  XUV300  2015       CNG       Manual       1199\n1   C002    Maruti  Brezza  2021    Petrol       Manual       1248\n2   C003  Mahindra    Thar  2018    Petrol       Manual        998\n3   C004     Honda   Amaze  2018    Hybrid       Manual       1197\n4   C005     Honda    City  2022    Diesel    Automatic       1499',
    '(40, 20)',
    "Index(['Car_ID', 'Brand', 'Model', 'Year', 'Fuel_Type', 'Transmission',\n       'Engine_CC', 'Mileage_kmpl', 'Price_Lakh', 'Owner_Count', ...],\n      dtype='str')",
    'Data written succesfully in excel\n\n   Roll_no     name Dept\n0       10   Ganesh  CSE\n1       11     mani   IT\n2       12   nithin  ECE\n3       13  Chandhu  CSE'
  ],
  exp2: [
    'The imports complete without printed output.',
    "           id                                              title state\n0  5188263209  CI: Don't label approved PRs and block /take o...  open\n1  5186821072  ENH: to_time support a space before AM/PM (GH#...  open\n2  5186592706  BUG: Timedelta silently ignored AM/PM in strin...  open\n3  5186578959  BUG: Parse GMT as UTC regardless of system tim...  open\n4  5183237191        DEV: add default envs for common pixi tasks  open",
    '   id    name\n0   1  ganesh\n1   2    mani',
    'The original notebook source is displayed in the Complete Notebook stage.',
    'The original notebook source is displayed in the Complete Notebook stage.',
    '   id    name\n0   1  ganesh\n1   2    mani'
  ],
  exp3: [
    'The NumPy and pandas imports complete without printed output.',
    '       A      B\n0  False  False\n1  False   True\n2   True   True\n\n     A    B\n0  1.0  4.0\n\n     A    B\n0  1.0  4.0\n1  2.0  0.0\n2  0.0  0.0',
    '   Gender  gender_num\n0    male           1\n1  female           0',
    'The recorded run prints the count of values outside the -3 to 3 range for each generated column.',
    'The regular-expression module imports without printed output.',
    "['this is \\t a \\n', 'est']"
  ],
  exp4: [
    'The pandas import completes without printed output.',
    'No output',
    'No output',
    'Original Series:\nDepartment   Branch\nEngineering  CSE          85\n             ECE          78\nScience      Physics      92\n             Chemistry    88\ndtype: int64\n\nData for CSE:\n85',
    'Original Tabular Data:\n                       2025  2026\nEngineering CSE          85    90\n            ECE          78    82\nScience     Physics      92    95\n            Chemistry    88    91',
    'The complete notebook prints the merge result and combine_first result for the two dataframes.'
  ],
  exp5: [
    'The pandas import completes without printed output.',
    'No output',
    'No output',
    'Original Series:\nDepartment   Branch\nEngineering  CSE          85\n             ECE          78\nScience      Physics      92\n             Chemistry    88\ndtype: int64\n\nData for CSE:\n85',
    'Original Tabular Data:\n                       2025  2026\nEngineering CSE          85    90\n            ECE          78    82\nScience     Physics      92    95\n            Chemistry    88    91',
    'The supplied notebook contains the complete recorded hierarchical-index workflow.'
  ],
  exp6: [
    'The pandas import completes without printed output.',
    'Time Series:\n2025-03-21    30\n2025-05-23    40\n2026-01-31    22\n2026-07-11    29\n2026-10-13    33\ndtype: int64',
    "Generated DatetimeIndex:\nDatetimeIndex(['2026-05-23', '2026-05-24', '2026-05-25', '2026-05-26',\n               '2026-05-27', '2026-05-28', '2026-05-29'],\n              dtype='datetime64[us]', freq='D')",
    'The notebook prints Asia/Kolkata timestamps, timezone-naive timestamps, localized timestamps, and America/New_York timestamps.',
    'No output',
    'The complete notebook prints period conversions, monthly period data, 3-hour means, 4-hour sums, and 30-minute resampling results.'
  ]
};

const buildSteps = (theme, code, output) => {
  const snippets = code.split(/\n\s*\n/).filter(Boolean);
  return labels.map((title, index) => ({
    id: String.fromCharCode(65 + index),
    title,
    aim: index === 5 ? `Run and review the complete original ${theme} notebook.` : `Work through the original ${theme} notebook section without changing its code.`,
    procedure: procedures[index],
    code: index === 5 ? code : snippets[index] || code,
    output: output[index]
  }));
};

const makeExperiment = (id, number, title, description, module, difficulty, tools, theme) => ({
  id,
  number,
  title,
  description,
  module,
  difficulty,
  tools,
  notebook: notebookFile[id],
  overview: {
    summary: `This experiment is based on the supplied ${id}.ipynb notebook. Each practical preserves the original notebook code and presents the recorded outcome for review.`,
    architecture: ['Open Notebook', 'Import Libraries', 'Run Original Cells', 'Inspect Output', 'Record Observation', 'Review Results']
  },
  subExperiments: buildSteps(theme, notebookCode[id], recorded[id])
});

export const experiments = [
  makeExperiment('exp1', '01', 'Pandas Data Import and Export', 'Read CSV data and work with CSV, JSON, and Excel files using pandas.', 'Python for Data Science', 'Beginner', ['Python', 'Pandas', 'OpenPyXL'], 'data import and export'),
  makeExperiment('exp2', '02', 'Web API and SQLite Data Access', 'Retrieve GitHub issue data and perform basic SQLite database operations.', 'Data Collection & Preprocessing', 'Intermediate', ['Python', 'Pandas', 'Requests', 'SQLite'], 'API and SQLite'),
  makeExperiment('exp3', '03', 'Data Cleaning and Text Patterns', 'Identify missing values, transform categories, inspect outliers, and use regular expressions.', 'Data Collection & Preprocessing', 'Beginner', ['Python', 'Pandas', 'NumPy'], 'data cleaning'),
  makeExperiment('exp4', '04', 'Hierarchical Indexing and DataFrames', 'Create MultiIndex structures and compare stack, unstack, merge, and combine operations.', 'Exploratory Data Analysis', 'Intermediate', ['Python', 'Pandas'], 'hierarchical dataframe operations'),
  makeExperiment('exp5', '05', 'MultiIndex Data Operations', 'Practice hierarchical series selection and reshaping tabular data.', 'Exploratory Data Analysis', 'Intermediate', ['Python', 'Pandas'], 'MultiIndex data operations'),
  makeExperiment('exp6', '06', 'Time Series and Periods', 'Create time series, manage time zones and periods, and resample observations.', 'Data Visualization', 'Intermediate', ['Python', 'Pandas'], 'time series analysis')
];
