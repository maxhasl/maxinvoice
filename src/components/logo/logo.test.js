import mainReducer from '../../redux/features/main';
import {
  mainLogoSelector,
  setLogo,
  removeLogo,
} from '../../redux/features/main';
import { renderWithRedux } from '../../redux/tests/renderWithRedux';
import store from '../../redux/store';
import Logo from './logo';
import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor } from '@testing-library/react';

describe('Logo', () => {
  const emptyLogo = {
    main: {
      logo: {
        placeholder: 'Add Your Logo',
        value: '',
      },
    },
  };

  const addedLogo = {
    main: {
      logo: {
        placeholder: 'Add Your Logo',
        value: 'https://logo.png',
      },
    },
  };

  test('Logo selector', () => {
    expect(mainLogoSelector(emptyLogo)).toMatchObject({
      placeholder: 'Add Your Logo',
      value: '',
    });
  });

  test('Empty Logo', () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<Logo />, emptyLogo);

    expect(getByTestId('add-btn')).toBeInTheDocument();
    expect(queryByTestId('img-wrap')).toBeNull();
  });

  test('Add Logo', async () => {
    const { getByTestId } = renderWithRedux(<Logo />, emptyLogo);
    const inputFile = getByTestId('add-logo');
    const fakeFile = new File(['logo'], 'logo.png', { type: 'image/png' });

    expect(getByTestId('add-btn')).toBeInTheDocument();

    await waitFor(() =>
      fireEvent.change(inputFile, {
        target: { files: [fakeFile] },
      })
    );

    expect(inputFile.files[0].name).toBe('logo.png');

    expect(
      mainReducer(emptyLogo.main, setLogo(inputFile.files[0].name))
    ).toEqual({
      logo: {
        placeholder: 'Add Your Logo',
        value: inputFile.files[0].name,
      },
    });
  });

  test('Added Logo', () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<Logo />, addedLogo);

    expect(getByTestId('img-wrap')).toBeInTheDocument();
    expect(queryByTestId('add-btn')).toBeNull();
  });

  test('Remove Logo', () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<Logo />, addedLogo);
    const removeBtn = getByTestId('remove-btn');
    const inputFile = getByTestId('add-logo');

    expect(getByTestId('img-wrap')).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
    expect(queryByTestId('add-btn')).toBeNull();

    fireEvent.click(removeBtn);

    expect(mainReducer(addedLogo.main, removeLogo())).toEqual({
      logo: {
        placeholder: 'Add Your Logo',
        value: '',
      },
    });

    expect(queryByTestId('img-wrap')).toBeNull();
    expect(getByTestId('add-btn')).toBeInTheDocument();
  });
});
