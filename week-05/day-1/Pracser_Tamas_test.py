import unittest
import Pracser_Tamas_work

class FirstTest(unittest.TestCase):
    def test_anagramm_lowercase(self):
        self.assertTrue(Pracser_Tamas_work.anagramm("ezmiez", "miezez"))

    def test_anagramm_capitalletter(self):
        self.assertTrue(Pracser_Tamas_work.anagramm("Ezmiez", "miezez"))

    def test_anagramm_spaces(self):
        self.assertTrue(Pracser_Tamas_work.anagramm("ez miez", "miezez"))

    def test_anagramm_nostring(self):
        self.assertFalse(Pracser_Tamas_work.anagramm(" ", "miezez"))

    def test_anagramm_numbers_as_string(self):
        self.assertTrue(Pracser_Tamas_work.anagramm("321", "123"))

    def test_anagramm_numbers(self):
        self.assertRaises(TypeError, Pracser_Tamas_work.anagramm, 0, 2)

class SecondTest(unittest.TestCase):
    def test_count_letters_lowercase(self):
        self.assertEqual(Pracser_Tamas_work.count_letters("ezmiez"),{"e":2, "z":2, "m":1, "i":1})

    def test_count_letters_capitalletter(self):
        self.assertEqual(Pracser_Tamas_work.count_letters("Ezmiez"),{"e":2, "z":2, "m":1, "i":1})

    def test_count_letters_spaces(self):
        self.assertEqual(Pracser_Tamas_work.count_letters("ez miez"),{"e":2, "z":2, "m":1, "i":1})

    def test_count_letters_nostring(self):
        self.assertEqual(Pracser_Tamas_work.count_letters(" "), {})

    def test_count_letters_numbers_as_string(self):
        self.assertEqual(Pracser_Tamas_work.count_letters("321"), {})

    def test_count_letters_numbers(self):
        self.assertRaises(TypeError, Pracser_Tamas_work.count_letters, 0)

if __name__ == '__main__':
    unittest.main()
