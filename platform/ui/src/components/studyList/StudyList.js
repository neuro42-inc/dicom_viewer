import './StudyList.styl';

import React from 'react';
import classNames from 'classnames';
import TableSearchFilter from './TableSearchFilter.js';
import PropTypes from 'prop-types';
import { StudyListLoadingText } from './StudyListLoadingText.js';
import { useTranslation } from 'react-i18next';

const getContentFromUseMediaValue = (
  displaySize,
  contentArrayMap,
  defaultContent
) => {
  const content =
    displaySize in contentArrayMap
      ? contentArrayMap[displaySize]
      : defaultContent;

  return content;
};
/**
 *
 *
 * @param {*} props
 * @returns
 */
function StudyList(props) {
  const {
    isLoading,
    hasError,
    studies,
    sort,
    onSort: handleSort,
    filterValues,
    onFilterChange: handleFilterChange,
    onSelectItem: handleSelectItem,
    studyListDateFilterNumDays,
    displaySize,
  } = props;
  const { t, ready: translationsAreReady } = useTranslation('StudyList');

  const largeTableMeta = [
    {
      displayText: t('PatientName'),
      fieldName: 'PatientName',
      inputType: 'text',
      size: 330,
    },
    {
      displayText: t('MRN'),
      fieldName: 'PatientID',
      inputType: 'text',
      size: 378,
    },
    {
      displayText: t('AccessionNumber'),
      fieldName: 'AccessionNumber',
      inputType: 'text',
      size: 180,
    },
    {
      displayText: t('StudyDate'),
      fieldName: 'StudyDate',
      inputType: 'date-range',
      size: 300,
    },
    {
      displayText: t('Modality'),
      fieldName: 'modalities',
      inputType: 'text',
      size: 114,
    },
    {
      displayText: t('StudyDescription'),
      fieldName: 'StudyDescription',
      inputType: 'text',
      size: 335,
    },
  ];

  const mediumTableMeta = [
    {
      displayText: `${t('PatientName')} / ${t('MRN')}`,
      fieldName: 'patientNameOrId',
      inputType: 'text',
      size: 250,
    },
    {
      displayText: t('Description'),
      fieldName: 'accessionOrModalityOrDescription',
      inputType: 'text',
      size: 350,
    },
    {
      displayText: t('StudyDate'),
      fieldName: 'StudyDate',
      inputType: 'date-range',
      size: 300,
    },
  ];

  const smallTableMeta = [
    {
      displayText: t('Search'),
      fieldName: 'allFields',
      inputType: 'text',
      size: 100,
    },
  ];

  const tableMeta = getContentFromUseMediaValue(
    displaySize,
    { large: largeTableMeta, medium: mediumTableMeta, small: smallTableMeta },
    smallTableMeta
  );

  const totalSize = tableMeta
    .map(field => field.size)
    .reduce((prev, next) => prev + next);

  return translationsAreReady ? <></> : null;
}

StudyList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  studies: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  // ~~ SORT
  sort: PropTypes.shape({
    fieldName: PropTypes.string,
    direction: PropTypes.oneOf(['desc', 'asc', null]),
  }).isRequired,
  onSort: PropTypes.func.isRequired,
  // ~~ FILTERS
  filterValues: PropTypes.shape({
    PatientName: PropTypes.string.isRequired,
    PatientID: PropTypes.string.isRequired,
    AccessionNumber: PropTypes.string.isRequired,
    StudyDate: PropTypes.string.isRequired,
    modalities: PropTypes.string.isRequired,
    StudyDescription: PropTypes.string.isRequired,
    patientNameOrId: PropTypes.string.isRequired,
    accessionOrModalityOrDescription: PropTypes.string.isRequired,
    allFields: PropTypes.string.isRequired,
    studyDateTo: PropTypes.any,
    studyDateFrom: PropTypes.any,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  studyListDateFilterNumDays: PropTypes.number,
  displaySize: PropTypes.string,
};

StudyList.defaultProps = {};

function TableRow(props) {
  const {
    AccessionNumber,
    isHighlighted,
    modalities,
    PatientID,
    PatientName,
    StudyDate,
    StudyDescription,
    StudyInstanceUID,
    onClick: handleClick,
    displaySize,
  } = props;

  const { t } = useTranslation('StudyList');

  const largeRowTemplate = (
    <tr
      onClick={() => handleClick(StudyInstanceUID)}
      className={classNames({ active: isHighlighted })}
    >
      <td className={classNames({ 'empty-value': !PatientName })}>
        {PatientName || `(${t('Empty')})`}
      </td>
      <td>{PatientID}</td>
      <td>{AccessionNumber}</td>
      <td>{StudyDate}</td>
      <td className={classNames({ 'empty-value': !modalities })}>
        {modalities || `(${t('Empty')})`}
      </td>
      <td>{StudyDescription}</td>
    </tr>
  );

  const mediumRowTemplate = (
    <tr
      onClick={() => handleClick(StudyInstanceUID)}
      className={classNames({ active: isHighlighted })}
    >
      <td className={classNames({ 'empty-value': !PatientName })}>
        {PatientName || `(${t('Empty')})`}
        <div style={{ color: '#60656f' }}>{PatientID}</div>
      </td>
      <td>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* DESCRIPTION */}
          <div
            className="hide-xs"
            style={{
              whiteSpace: 'pre-wrap',
              flexGrow: 1,
            }}
          >
            {StudyDescription}
          </div>

          {/* MODALITY & ACCESSION */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '80px',
              width: '80px',
            }}
          >
            <div
              className={classNames({
                modalities: modalities,
                'empty-value': !modalities,
              })}
              aria-label={modalities}
              title={modalities}
            >
              {modalities || `(${t('Empty')})`}
            </div>
            <div
              style={{
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
              aria-label={AccessionNumber}
              title={AccessionNumber}
            >
              {AccessionNumber}
            </div>
          </div>
        </div>
      </td>
      {/* DATE */}
      <td style={{ textAlign: 'center' }}>{StudyDate}</td>
    </tr>
  );

  const smallRowTemplate = (
    <tr
      onClick={() => handleClick(StudyInstanceUID)}
      className={classNames({ active: isHighlighted })}
    >
      <td style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* NAME AND ID */}
          <div
            className={classNames({ 'empty-value': !PatientName })}
            style={{ width: '150px', minWidth: '150px' }}
          >
            <div style={{ fontWeight: 500, paddingTop: '3px' }}>
              {PatientName || `(${t('Empty')})`}
            </div>
            <div style={{ color: '#60656f' }}>{PatientID}</div>
          </div>

          {/* DESCRIPTION */}
          <div
            className="hide-xs"
            style={{
              whiteSpace: 'pre-wrap',
              flexGrow: 1,
              paddingLeft: '35px',
            }}
          >
            {StudyDescription}
          </div>

          {/* MODALITY & DATE */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '80px',
              width: '80px',
            }}
          >
            <div
              className={classNames({
                modalities: modalities,
                'empty-value': !modalities,
              })}
              aria-label={modalities}
              title={modalities}
            >
              {modalities || `(${t('Empty')})`}
            </div>
            <div>{StudyDate}</div>
          </div>
        </div>
      </td>
    </tr>
  );

  const rowTemplate = getContentFromUseMediaValue(
    displaySize,
    {
      large: largeRowTemplate,
      medium: mediumRowTemplate,
      small: smallRowTemplate,
    },
    smallRowTemplate
  );

  return rowTemplate;
}

TableRow.propTypes = {
  AccessionNumber: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
  modalities: PropTypes.string,
  PatientID: PropTypes.string.isRequired,
  PatientName: PropTypes.string.isRequired,
  StudyDate: PropTypes.string.isRequired,
  StudyDescription: PropTypes.string.isRequired,
  StudyInstanceUID: PropTypes.string.isRequired,
  displaySize: PropTypes.string,
};

TableRow.defaultProps = {
  isHighlighted: false,
};

export { StudyList };
